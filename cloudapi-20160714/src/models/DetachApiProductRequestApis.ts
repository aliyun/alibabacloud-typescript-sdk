// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachApiProductRequestApis extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ba84c55eca46488598da17c0609f3ead
   */
  apiId?: string;
  /**
   * @remarks
   * The environment to which the API is published. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the pre-release environment
   * *   **TEST**: the test environment
   * 
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

