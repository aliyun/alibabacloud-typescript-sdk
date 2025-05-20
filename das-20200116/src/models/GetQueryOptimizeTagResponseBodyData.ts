// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeTagResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Slow SQL queries of offline synchronization. No optimization is required.
   */
  comments?: string;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  sqlId?: string;
  /**
   * @remarks
   * The SQL tags. Multiple tags are separated by commas (,).
   * 
   * @example
   * DAS_IN_PLAN,DAS_NOT_IMPORTANT
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      sqlId: 'SqlId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      sqlId: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

