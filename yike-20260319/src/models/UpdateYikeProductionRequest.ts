// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateYikeProductionRequest extends $dara.Model {
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pd_12334**
   */
  productionId?: string;
  /**
   * @remarks
   * The project title.
   * 
   * @example
   * title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      productionId: 'ProductionId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productionId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

