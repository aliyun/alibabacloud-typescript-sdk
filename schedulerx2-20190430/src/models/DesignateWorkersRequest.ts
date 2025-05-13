// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DesignateWorkersRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the machines to be designated. Valid values: 1 and 2. The value 1 specifies the worker type. The value 2 specifies the label type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @remarks
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hxm.test
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 144153
   */
  jobId?: number;
  /**
   * @remarks
   * The designated `labels`. Specify the value of the parameter in a `JSON` string.
   * 
   * @example
   * ["gray"]
   */
  labels?: string;
  /**
   * @remarks
   * The unique identifier (UID) of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a06d5ea-f576-4326-842c-fb14ea043d8d
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * public
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to allow a failover.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  transferable?: boolean;
  /**
   * @remarks
   * The designated machines. Specify the value of the parameter in a JSON string.
   * 
   * @example
   * ["127.0.0.1","127.0.0.2"]
   */
  workers?: string;
  static names(): { [key: string]: string } {
    return {
      designateType: 'DesignateType',
      groupId: 'GroupId',
      jobId: 'JobId',
      labels: 'Labels',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      transferable: 'Transferable',
      workers: 'Workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateType: 'number',
      groupId: 'string',
      jobId: 'number',
      labels: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      transferable: 'boolean',
      workers: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

