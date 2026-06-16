// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 887
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'regId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
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

