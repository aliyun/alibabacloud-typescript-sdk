// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter. You can choose one or more names for the query. Value range:  
   * 
   * - Categories: Template categories  
   * - DeployTypes: Deployment types  
   * - ApplicationScenes: Application scenarios  
   * - BasicServices: Basic services  
   * - ResourceTypes: Resource types  
   * - TemplateNames: Template names
   * 
   * @example
   * Categories
   */
  name?: string;
  /**
   * @remarks
   * The list of filter values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

