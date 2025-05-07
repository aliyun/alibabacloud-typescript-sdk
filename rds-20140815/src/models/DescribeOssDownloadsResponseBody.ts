// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOssDownloadsResponseBodyItems } from "./DescribeOssDownloadsResponseBodyItems";


export class DescribeOssDownloadsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Details of the backup file.
   */
  items?: DescribeOssDownloadsResponseBodyItems;
  /**
   * @remarks
   * The ID of the migration task.
   * 
   * @example
   * 562154852
   */
  migrateTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5409D02-D661-4BF3-8F3D-0A814D0574E7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      items: 'Items',
      migrateTaskId: 'MigrateTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      items: DescribeOssDownloadsResponseBodyItems,
      migrateTaskId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

