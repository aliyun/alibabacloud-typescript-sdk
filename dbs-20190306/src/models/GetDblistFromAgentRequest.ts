// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBListFromAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup gateway.
   * 
   * @example
   * 160813
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region in which the backup gateway resides.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      sourceEndpointRegion: 'SourceEndpointRegion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      clientToken: 'string',
      ownerId: 'string',
      sourceEndpointRegion: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

