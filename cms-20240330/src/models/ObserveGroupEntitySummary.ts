// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupEntitySummary extends $dara.Model {
  /**
   * @remarks
   * The entity category.
   * 
   * @example
   * acs
   */
  entityCategory?: string;
  /**
   * @remarks
   * The total count of entities of this type.
   * 
   * @example
   * 9
   */
  entityCount?: number;
  /**
   * @remarks
   * The entity domain.
   * 
   * @example
   * acs
   */
  entityDomain?: string;
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * acs.rocketmq.topic
   */
  entityType?: string;
  /**
   * @remarks
   * The count of primary entities of this type.
   * 
   * @example
   * 0
   */
  mainCount?: number;
  /**
   * @remarks
   * The count of associated child entities of this type.
   * 
   * @example
   * 9
   */
  relatedCount?: number;
  static names(): { [key: string]: string } {
    return {
      entityCategory: 'entityCategory',
      entityCount: 'entityCount',
      entityDomain: 'entityDomain',
      entityType: 'entityType',
      mainCount: 'mainCount',
      relatedCount: 'relatedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityCategory: 'string',
      entityCount: 'number',
      entityDomain: 'string',
      entityType: 'string',
      mainCount: 'number',
      relatedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

