// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDcdnFullDomainsBlockIPRequest extends $dara.Model {
  /**
   * @remarks
   * The duration for which IP addresses or CIDR blocks are blocked. Unit: seconds. The value **0** specifies that IP addresses or CIDR blocks are permanently blocked. This parameter is available only if you set **OperationType** to **block**.
   * 
   * @example
   * 3000
   */
  blockInterval?: number;
  /**
   * @remarks
   * The IP addresses that you want to block or unblock. Separate multiple IP addresses with commas (,). You can specify up to 1,000 IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.XXX.XXX.1,2.XXX.XXX.2
   */
  IPList?: string;
  /**
   * @remarks
   * The action that you want to perform. Valid values:
   * 
   * *   **block**
   * *   **unblock**
   * 
   * This parameter is required.
   * 
   * @example
   * block
   */
  operationType?: string;
  /**
   * @remarks
   * The type of the blocking duration. This parameter is available only if you set **OperationType** to **block**. Valid values:
   * 
   * *   **cover**: the blocking duration that is specified in the request takes effect.
   * *   **uncover**: the longer one of the blocking duration that is specified in the request and the remaining blocking duration takes effect.
   * *   Default value: cover.
   * 
   * @example
   * cover
   */
  updateType?: string;
  static names(): { [key: string]: string } {
    return {
      blockInterval: 'BlockInterval',
      IPList: 'IPList',
      operationType: 'OperationType',
      updateType: 'UpdateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockInterval: 'number',
      IPList: 'string',
      operationType: 'string',
      updateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

