// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Index } from "./Index";


export class GetStoreViewIndexResponseBodyIndexes extends $dara.Model {
  /**
   * @remarks
   * The index configurations of the Logstore.
   */
  index?: Index;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * my-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the project to which the Logstore belongs.
   * 
   * @example
   * example-project
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: Index,
      logstore: 'string',
      project: 'string',
    };
  }

  validate() {
    if(this.index && typeof (this.index as any).validate === 'function') {
      (this.index as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

