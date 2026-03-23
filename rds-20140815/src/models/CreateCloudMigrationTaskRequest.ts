// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudMigrationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceName?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceAccount?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourcePassword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourcePort?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      resourceOwnerId: 'ResourceOwnerId',
      sourceAccount: 'SourceAccount',
      sourceCategory: 'SourceCategory',
      sourceIpAddress: 'SourceIpAddress',
      sourcePassword: 'SourcePassword',
      sourcePort: 'SourcePort',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      resourceOwnerId: 'number',
      sourceAccount: 'string',
      sourceCategory: 'string',
      sourceIpAddress: 'string',
      sourcePassword: 'string',
      sourcePort: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

