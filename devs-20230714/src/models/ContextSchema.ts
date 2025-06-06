// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContextSchema extends $dara.Model {
  /**
   * @example
   * [git](https://git-scm.com/) address for [git clone](https://git-scm.com/docs/git-clone).
   */
  description?: string;
  /**
   * @example
   * git@gitlab.alibaba-inc.com:serverless/lambda.git
   */
  hint?: string;
  /**
   * @example
   * gitRepoUrl
   */
  name?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      hint: 'hint',
      name: 'name',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hint: 'string',
      name: 'string',
      required: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

