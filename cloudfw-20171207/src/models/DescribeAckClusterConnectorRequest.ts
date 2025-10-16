// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckClusterConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac-7c1bad6c3cc84c33baab
   */
  connectorId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

