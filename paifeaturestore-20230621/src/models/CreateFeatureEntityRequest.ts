// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFeatureEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The join key that links feature views to the feature entity.
   * 
   * This parameter is required.
   * 
   * @example
   * user_id
   */
  joinId?: string;
  /**
   * @remarks
   * The feature entity name.
   * 
   * This parameter is required.
   * 
   * @example
   * feature_entity_1
   */
  name?: string;
  /**
   * @remarks
   * The parent feature entity ID.
   * 
   * @example
   * 1
   */
  parentFeatureEntityId?: string;
  /**
   * @remarks
   * The project ID. To get this ID, call the ListInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      joinId: 'JoinId',
      name: 'Name',
      parentFeatureEntityId: 'ParentFeatureEntityId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinId: 'string',
      name: 'string',
      parentFeatureEntityId: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

