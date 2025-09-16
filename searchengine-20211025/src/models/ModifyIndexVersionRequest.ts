// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIndexVersionRequestBody extends $dara.Model {
  /**
   * @remarks
   * The deployment ID of the data source.
   * 
   * @example
   * 277
   */
  buildDeployId?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * main_index
   */
  indexName?: string;
  /**
   * @remarks
   * The index version.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      indexName: 'indexName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'string',
      indexName: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIndexVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  body?: ModifyIndexVersionRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ModifyIndexVersionRequestBody },
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

