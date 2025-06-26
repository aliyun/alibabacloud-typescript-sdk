// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReadyFlagByProxyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiType?: string;
  compressEnable?: boolean;
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
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  maxResult?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      compressEnable: 'CompressEnable',
      dataType: 'DataType',
      domainCode: 'DomainCode',
      filter: 'Filter',
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      compressEnable: 'boolean',
      dataType: 'string',
      domainCode: 'string',
      filter: 'string',
      maxResult: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

