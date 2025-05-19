// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProjectMetaResponseBodyResourcesResource extends $dara.Model {
  /**
   * @example
   * ApsaraDB for MongoDB
   */
  description?: string;
  /**
   * @example
   * [{\\"name\\":\\"product\\",\\"value\\":\\"MongoDB\\"]
   */
  labels?: string;
  /**
   * @example
   * acs_mongodb
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

