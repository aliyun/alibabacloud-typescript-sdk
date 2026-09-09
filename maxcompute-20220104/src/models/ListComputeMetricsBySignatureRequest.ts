// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeMetricsBySignatureRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for the query. This value is a UNIX timestamp representing milliseconds.
   * 
   * @example
   * 1718590596556
   */
  endDate?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 20240730****ddlr
   */
  instanceId?: string;
  /**
   * @remarks
   * The job owner.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project names.
   */
  projectNames?: string[];
  /**
   * @remarks
   * The SQL job signature.
   * 
   * @example
   * m4S/2HipBVngCX94MNIAqmM7Ov4=
   */
  signature?: string;
  /**
   * @remarks
   * The start time for the query. This value is a UNIX timestamp representing milliseconds.
   * 
   * @example
   * 1715393576201
   */
  startDate?: number;
  /**
   * @remarks
   * The metering type.
   * 
   * - `ComputationSql`: the metering data of SQL jobs that are performed on internal tables.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectNames: 'projectNames',
      signature: 'signature',
      startDate: 'startDate',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectNames: { 'type': 'array', 'itemType': 'string' },
      signature: 'string',
      startDate: 'number',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectNames)) {
      $dara.Model.validateArray(this.projectNames);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

