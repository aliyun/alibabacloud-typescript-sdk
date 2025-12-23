// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQueryProcessorRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters.
   * 
   * @example
   * {
   *     "domain": "GENERAL",
   *     "category": "",
   *     "processors": [
   *         {
   *             "name": "synonym",
   *             "useSystemDictionary": true
   *         },
   *         {
   *             "name": "stop_word",
   *             "useSystemDictionary": true
   *         }
   *     ]
   * }
   */
  body?: any;
  /**
   * @remarks
   * Specifies whether the request is a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'any',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

