// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentToolsResponseBodyData extends $dara.Model {
  /**
   * @example
   * Queries RDS instances.
   */
  en?: string;
  ja?: string;
  /**
   * @example
   * describe_db_instances
   */
  name?: string;
  tc?: string;
  /**
   * @example
   * get
   */
  type?: string;
  zh?: string;
  static names(): { [key: string]: string } {
    return {
      en: 'En',
      ja: 'Ja',
      name: 'Name',
      tc: 'Tc',
      type: 'Type',
      zh: 'Zh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      en: 'string',
      ja: 'string',
      name: 'string',
      tc: 'string',
      type: 'string',
      zh: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentToolsResponseBody extends $dara.Model {
  data?: ListCustomAgentToolsResponseBodyData[];
  /**
   * @example
   * 32DEFB4A-861F-5D1D-ADD5-918E4FD7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListCustomAgentToolsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

