// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFullLogTtlRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

