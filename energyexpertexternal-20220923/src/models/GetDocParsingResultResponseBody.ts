// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocParsingResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * - The parsed content of the document.
   * - The format (markdown or json) is determined by the returnFormat parameter. For specific format details, refer to: [json return structure](https://www.alibabacloud.com/help/en/energy-expert/developer-reference/interface-attached-information#b644b6255cojj)
   * 
   * @example
   * {\\"doc_info\\":{\\"languages\\":[\\"zh\\",\\"en\\"],\\"doc_type\\":\\"pdf\\",\\"pdf_toc\\":[{\\"title\\":\\"封面\\",\\"level\\":0,\\"page\\":0}],\\"pages\\":366,\\"page_list\\":[{\\"imageWidth\\":596,\\"imageHeight\\":842,\\"pageIdAllDocs\\":0,\\"fileIndex\\":0,\\"pageIdCurDoc\\":0,\\"angle\\":0}],\\"doc_data\\":[{\\"uniqueId\\":\\"about_us_para\\",\\"page_num\\":\\"01\\",\\"index\\":\\"xxx\\",\\"name\\":\\"xxx\\",\\"type\\":\\"xxxx\\",\\"subType\\":\\"xxx\\",\\"text\\":\\"xxx\\",\\"before_text\\":\\"xxx\\",\\"after_text\\":\\"xxx\\",\\"extInfo\\":[{\\"uniqueId\\":\\"b0x1x0\\",\\"pos\\":[{\\"x\\":229,\\"y\\":208},{\\"x\\":421,\\"y\\":208},{\\"x\\":421,\\"y\\":242},{\\"x\\":229,\\"y\\":242}],\\"text\\":\\"Kurt Götze\\",\\"type\\":\\"Text\\",\\"subType\\":\\"Text\\",\\"pageNum\\":[0],\\"index\\":0}]}]}}
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocParsingResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned result.
   */
  data?: GetDocParsingResultResponseBodyData;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDocParsingResultResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

