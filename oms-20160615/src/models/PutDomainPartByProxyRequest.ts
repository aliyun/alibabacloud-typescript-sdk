// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDomainPartByProxyRequest extends $dara.Model {
  compressed?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  data?: string;
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainCode?: string;
  static names(): { [key: string]: string } {
    return {
      compressed: 'Compressed',
      data: 'Data',
      dataType: 'DataType',
      domainCode: 'DomainCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressed: 'boolean',
      data: 'string',
      dataType: 'string',
      domainCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

