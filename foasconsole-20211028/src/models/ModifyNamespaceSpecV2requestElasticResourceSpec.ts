// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNamespaceSpecV2RequestElasticResourceSpec extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6
   */
  cpu?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 52
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

