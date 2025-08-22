// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnAclFieldsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The rules and policies that were configured. The JSON string is decoded.
   * 
   * @example
   * \\"fieldList\\":[{\\"name\\":\\"alert\\",\\"display\\":\\"observe\\",\\"tip\\":\\"mark the request in the log without blocking it\\"},{\\"name\\":\\"bypass\\",\\"display\\":\\"bypass\\",\\"tip\\":\\"bypass security modules\\"}],\\"module\\":[{\\"name\\":\\"cc\\",\\"display\\":\\"Rate Limit\\",\\"tip\\":\\"bypass Rate Limit\\"},{\\"name\\":\\"bot\\",\\"display\\":\\"Bot Traffic Management\\",\\"tip\\":\\"bypass Bot Manager\\"}]
   */
  fields?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnAclFieldsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the rules.
   */
  content?: DescribeDcdnAclFieldsResponseBodyContent[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30A3A25A-86B3-4C1D-BAA8-12B8607A5CFD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeDcdnAclFieldsResponseBodyContent },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

