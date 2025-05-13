// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReinstallCollectorRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters. For more information, see the Request body section in this topic.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Indicates whether the shipper is installed. Valid values:
   * 
   * *   true: The shipper is installed.
   * *   false: The shipper fails to be installed.
   * 
   * @example
   * {
   *   "restartType": "nodeEcsId",
   *   "nodes":["i-bp1gyhphjaj73jsr****","i-bp10piq1mkfnyw9t****"]
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

