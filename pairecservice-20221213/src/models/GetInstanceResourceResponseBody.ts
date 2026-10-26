// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource category. Valid values:
   * - DataManagement
   * - Engine
   * - Monitor
   * 
   * @example
   * DataManagement
   */
  category?: string;
  /**
   * @remarks
   * The configuration information of the resource.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The creation time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2020-10-13 17:34:52
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2020-10-13 17:34:52
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The resource group.
   * 
   * If the resource category is DataManagement, valid values are:
   * - storage
   * - modelpipeline
   * - datastorage
   * - modeltrain
   * 
   * If the resource category is Engine, valid values are:
   * - feature
   * - predict
   * - recall
   * - recengine
   * 
   * If the resource category is Monitor, valid values are:
   * - logs
   * - logsback
   * - coldstart
   * - deploy
   * 
   * @example
   * storage
   */
  group?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D75C43DC-3D3A-5CC8-9AAC-8C77306C433B
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * reso-2s416t***
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * - Hologres
   * - EAS
   * - BE
   * - Rec
   * - Platform
   * - SLS
   * - DataHub
   * - Kafka
   * - Flinkvvp
   * - ACR
   * - OSS
   * - DataWorks
   * - PAI
   * - MaxCompute
   * - GraphCompute
   * - Redis
   * 
   * @example
   * OSS
   */
  type?: string;
  /**
   * @remarks
   * The resource URI.
   * 
   * @example
   * bucket-test-123
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      config: 'Config',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      group: 'Group',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      type: 'Type',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      config: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      group: 'string',
      requestId: 'string',
      resourceId: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

