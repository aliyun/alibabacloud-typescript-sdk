// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CrawlerTypeSupportedEntityTypes extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the entity type is optional.
   * 
   * @example
   * For example, for the maxcompute-schema type, whether the schema level is optional (whether the three-layer model is enabled)
   */
  optional?: boolean;
  /**
   * @remarks
   * The entity subtype of the parent level. The value is null if no parent level exists.
   * 
   * @example
   * database
   */
  parentSubType?: string;
  /**
   * @remarks
   * The entity subtype identifier.
   * 
   * @example
   * table
   */
  subType?: string;
  /**
   * @remarks
   * The entity type identifier, which is related to the crawler type. The format is (CrawlerType)-{SubType}.
   * 
   * @example
   * dlf-table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      optional: 'Optional',
      parentSubType: 'ParentSubType',
      subType: 'SubType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optional: 'boolean',
      parentSubType: 'string',
      subType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CrawlerType extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Data Lake Formation
   */
  displayName?: string;
  /**
   * @remarks
   * The list of supported entity types. The entity types have a top-down hierarchical relationship based on their declaration order.
   */
  supportedEntityTypes?: CrawlerTypeSupportedEntityTypes[];
  /**
   * @remarks
   * The type identifier.
   * 
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

