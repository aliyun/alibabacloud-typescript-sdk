// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDomainPartByProxyRequest extends $dara.Model {
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  part?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      domainCode: 'DomainCode',
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      domainCode: 'string',
      part: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

