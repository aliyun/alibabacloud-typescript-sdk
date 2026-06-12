// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StoreViewStore extends $dara.Model {
  /**
   * @remarks
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * ali-test-project
   */
  project?: string;
  /**
   * @remarks
   * The query filter statement.
   * 
   * @example
   * job: IT | select name, age, gender from log
   */
  query?: string;
  /**
   * @remarks
   * The name of the LogStore or MetricStore.
   * 
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  storeName?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      query: 'query',
      storeName: 'storeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      query: 'string',
      storeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

