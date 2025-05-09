// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CrawlerTypeSupportedEntityTypes } from "./CrawlerTypeSupportedEntityTypes";


export class CrawlerType extends $dara.Model {
  /**
   * @example
   * Data Lake Formation
   */
  displayName?: string;
  supportedEntityTypes?: CrawlerTypeSupportedEntityTypes[];
  /**
   * @example
   * dlf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      supportedEntityTypes: 'SupportedEntityTypes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      supportedEntityTypes: { 'type': 'array', 'itemType': CrawlerTypeSupportedEntityTypes },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedEntityTypes)) {
      $dara.Model.validateArray(this.supportedEntityTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

