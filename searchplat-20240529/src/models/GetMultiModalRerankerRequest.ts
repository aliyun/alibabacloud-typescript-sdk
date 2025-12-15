// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiModalRerankerRequestDocs extends $dara.Model {
  image?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiModalRerankerRequestQuery extends $dara.Model {
  image?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiModalRerankerRequest extends $dara.Model {
  docs?: GetMultiModalRerankerRequestDocs[];
  options?: { [key: string]: any };
  query?: GetMultiModalRerankerRequestQuery;
  static names(): { [key: string]: string } {
    return {
      docs: 'docs',
      options: 'options',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docs: { 'type': 'array', 'itemType': GetMultiModalRerankerRequestDocs },
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      query: GetMultiModalRerankerRequestQuery,
    };
  }

  validate() {
    if(Array.isArray(this.docs)) {
      $dara.Model.validateArray(this.docs);
    }
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    if(this.query && typeof (this.query as any).validate === 'function') {
      (this.query as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

