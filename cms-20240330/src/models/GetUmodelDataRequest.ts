// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUmodelDataRequest extends $dara.Model {
  /**
   * @remarks
   * Query conditions
   * 
   * @example
   * {
   * 	"filter": {
   * 		"domains": []
   * 	},
   * 	"offset": 0,
   * 	"size": 100000
   * }
   */
  content?: any;
  /**
   * @remarks
   * Method
   * 
   * This parameter is required.
   * 
   * @example
   * ListData
   */
  method?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      method: 'method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'any',
      method: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

