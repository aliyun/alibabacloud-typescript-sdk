// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchResponseBodyResponses extends $dara.Model {
  /**
   * @remarks
   * The response parameters of a child request. For more information, see the topic of the corresponding child request.
   */
  body?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the child request. The ID is used to associate a child request with a response.
   * 
   * @example
   * 93433894994ad2e1
   */
  id?: string;
  /**
   * @remarks
   * The returned HTTP status code of a child request. For more information, see the topic of the corresponding child request.
   * 
   * @example
   * 200
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      id: 'id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

