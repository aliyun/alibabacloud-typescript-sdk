// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTemplateResponseBodyResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The DataSource resource types that are used in the template. The value is deduplicated.
   */
  dataSources?: string[];
  /**
   * @remarks
   * The regular resource types that are used in the template. The value is deduplicated.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': 'string' },
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

