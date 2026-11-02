// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketIcon } from "./HiMarketIcon";


export class CreateProductCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the product category. The maximum length is 500 characters.
   * 
   * @example
   * Product category that includes AI-related capabilities
   */
  description?: string;
  /**
   * @remarks
   * The icon of the product category, which consists of two fields: icon type and icon information.
   */
  icon?: HiMarketIcon;
  /**
   * @remarks
   * The name of the product category. The maximum length is 100 characters.
   * 
   * @example
   * ai-capabilities
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      icon: 'icon',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      icon: HiMarketIcon,
      name: 'string',
    };
  }

  validate() {
    if(this.icon && typeof (this.icon as any).validate === 'function') {
      (this.icon as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

