// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enhance the detection of the anomalous activity. Enhancing detection improves accuracy and increases the alert rate for anomalous activities.
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  backed?: boolean;
  /**
   * @remarks
   * The reason for handling the anomalous activity.
   * 
   * @example
   * Confirmed as violation
   */
  dealReason?: string;
  /**
   * @remarks
   * The unique ID of the anomalous activity.
   * 
   * > To handle an anomalous activity, you must provide its unique ID. You can obtain this ID by calling the **DescribeEvents** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The language of the request and response. The default value is **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese.
   * 
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The operation to perform on the anomalous activity.
   * 
   * - **1**: Mark as false positive.
   * 
   * - **2**: Confirm and handle the anomalous activity.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backed: 'Backed',
      dealReason: 'DealReason',
      id: 'Id',
      lang: 'Lang',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backed: 'boolean',
      dealReason: 'string',
      id: 'number',
      lang: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

