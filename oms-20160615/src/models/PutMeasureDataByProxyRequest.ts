// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMeasureDataByProxyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiType?: string;
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
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      compressed: 'Compressed',
      data: 'Data',
      dataType: 'DataType',
      domainCode: 'DomainCode',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      compressed: 'boolean',
      data: 'string',
      dataType: 'string',
      domainCode: 'string',
      filter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

