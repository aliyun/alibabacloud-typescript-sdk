// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BucketInfo extends $dara.Model {
  /**
   * @example
   * private
   */
  bucketAcl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bucket001
   */
  bucketName?: string;
  /**
   * @example
   * this is a bucket
   */
  comment?: string;
  /**
   * @example
   * 2011-12-01T12:27:13.000Z
   */
  createTime?: string;
  /**
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @example
   * global
   */
  dispatcherType?: string;
  /**
   * @example
   * eos.aliyuncs.com
   */
  endpoint?: string;
  ensRegionId?: string;
  /**
   * @example
   * 2011-12-01T12:27:13.000Z
   */
  modifyTime?: string;
  /**
   * @example
   * general
   */
  resourceType?: string;
  /**
   * @example
   * Standard
   */
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      bucketAcl: 'BucketAcl',
      bucketName: 'BucketName',
      comment: 'Comment',
      createTime: 'CreateTime',
      dataRedundancyType: 'DataRedundancyType',
      dispatcherType: 'DispatcherType',
      endpoint: 'Endpoint',
      ensRegionId: 'EnsRegionId',
      modifyTime: 'ModifyTime',
      resourceType: 'ResourceType',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketAcl: 'string',
      bucketName: 'string',
      comment: 'string',
      createTime: 'string',
      dataRedundancyType: 'string',
      dispatcherType: 'string',
      endpoint: 'string',
      ensRegionId: 'string',
      modifyTime: 'string',
      resourceType: 'string',
      storageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

