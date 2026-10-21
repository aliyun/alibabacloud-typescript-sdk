// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgenticCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The catalog UUID. You can obtain it by calling ListAgenticCatalog or SearchAgenticCatalog.
   * 
   * This parameter is required.
   * 
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

