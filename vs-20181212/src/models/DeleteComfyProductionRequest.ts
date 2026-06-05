// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteComfyProductionRequest extends $dara.Model {
  /**
   * @example
   * 3e5bda20-5cd4-4d55-8d23-88d624a18caa
   */
  productionId?: string;
  static names(): { [key: string]: string } {
    return {
      productionId: 'ProductionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

