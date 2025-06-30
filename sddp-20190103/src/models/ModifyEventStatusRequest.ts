// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enhance the detection of anomalous events. If you enhance the detection of anomalous events, the detection accuracy and the rate of triggering alerts for anomalous events are improved. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  backed?: boolean;
  /**
   * @remarks
   * The reason why the anomalous event is handled.
   * 
   * @example
   * Anomaly confirmed
   */
  dealReason?: string;
  /**
   * @remarks
   * The ID of the anomalous event.
   * 
   * > You can call the **DescribeEvents** operation to query the ID of the anomalous event.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The method to handle the anomalous event. Valid values:
   * 
   * *   **1**: marks the anomalous event as a false positive.
   * *   **2**: confirms and handles the anomalous event.
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

