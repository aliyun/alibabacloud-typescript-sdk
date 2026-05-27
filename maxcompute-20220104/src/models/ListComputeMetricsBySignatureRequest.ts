// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeMetricsBySignatureRequest extends $dara.Model {
  /**
   * @example
   * 1718590596556
   */
  endDate?: number;
  /**
   * @example
   * 20240730****ddlr
   */
  instanceId?: string;
  /**
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  projectNames?: string[];
  /**
   * @example
   * ghijkl789012
   */
  signature?: string;
  /**
   * @example
   * 1715393576201
   */
  startDate?: number;
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

