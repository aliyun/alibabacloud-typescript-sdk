// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutProjectPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The project policy.
   * 
   * @example
   * { 	"Version": "1", 	"Statement": [{ 		"Action": ["log:PostLogStoreLogs"], 		"Resource": "acs:log:*:*:project/exampleproject/*", 		"Effect": "Deny", 		"Condition": { 			"StringNotLike": { 				"acs:SourceVpc": ["vpc-*"] 			} 		} 	}] }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

