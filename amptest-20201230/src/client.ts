// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateRulesRequest extends $tea.Model {
  home?: CreateRulesRequestHome;
  static names(): { [key: string]: string } {
    return {
      home: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      home: CreateRulesRequestHome,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesShrinkRequest extends $tea.Model {
  homeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      homeShrink: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      homeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBody extends $tea.Model {
  requestId?: string;
  size?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayRequest extends $tea.Model {
  home?: HuichengTestGrayRequestHome;
  static names(): { [key: string]: string } {
    return {
      home: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      home: HuichengTestGrayRequestHome,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayShrinkRequest extends $tea.Model {
  homeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      homeShrink: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      homeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayResponseBody extends $tea.Model {
  requestId?: string;
  size?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengTestGrayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengTestGrayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayEightRequest extends $tea.Model {
  home?: HuichengTestGrayEightRequestHome;
  static names(): { [key: string]: string } {
    return {
      home: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      home: HuichengTestGrayEightRequestHome,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayEightShrinkRequest extends $tea.Model {
  homeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      homeShrink: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      homeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayEightResponseBody extends $tea.Model {
  requestId?: string;
  size?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayEightResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengTestGrayEightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengTestGrayEightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayFifthRequest extends $tea.Model {
  home?: HuichengTestGrayFifthRequestHome;
  static names(): { [key: string]: string } {
    return {
      home: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      home: HuichengTestGrayFifthRequestHome,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayFifthShrinkRequest extends $tea.Model {
  homeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      homeShrink: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      homeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayFifthResponseBody extends $tea.Model {
  requestId?: string;
  size?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayFifthResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengTestGrayFifthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengTestGrayFifthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayNineRequest extends $tea.Model {
  home?: HuichengTestGrayNineRequestHome;
  static names(): { [key: string]: string } {
    return {
      home: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      home: HuichengTestGrayNineRequestHome,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayNineShrinkRequest extends $tea.Model {
  homeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      homeShrink: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      homeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayNineResponseBody extends $tea.Model {
  requestId?: string;
  size?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayNineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengTestGrayNineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengTestGrayNineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySecondRequest extends $tea.Model {
  home?: HuichengTestGraySecondRequestHome;
  static names(): { [key: string]: string } {
    return {
      home: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      home: HuichengTestGraySecondRequestHome,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySecondShrinkRequest extends $tea.Model {
  homeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      homeShrink: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      homeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySecondResponseBody extends $tea.Model {
  requestId?: string;
  size?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySecondResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengTestGraySecondResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengTestGraySecondResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySevenRequest extends $tea.Model {
  home?: HuichengTestGraySevenRequestHome;
  static names(): { [key: string]: string } {
    return {
      home: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      home: HuichengTestGraySevenRequestHome,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySevenShrinkRequest extends $tea.Model {
  homeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      homeShrink: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      homeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySevenResponseBody extends $tea.Model {
  requestId?: string;
  size?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySevenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengTestGraySevenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengTestGraySevenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySixRequest extends $tea.Model {
  home?: HuichengTestGraySixRequestHome;
  static names(): { [key: string]: string } {
    return {
      home: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      home: HuichengTestGraySixRequestHome,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySixShrinkRequest extends $tea.Model {
  homeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      homeShrink: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      homeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySixResponseBody extends $tea.Model {
  requestId?: string;
  size?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySixResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengTestGraySixResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengTestGraySixResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayTenRequest extends $tea.Model {
  home?: HuichengTestGrayTenRequestHome;
  static names(): { [key: string]: string } {
    return {
      home: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      home: HuichengTestGrayTenRequestHome,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayTenShrinkRequest extends $tea.Model {
  homeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      homeShrink: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      homeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayTenResponseBody extends $tea.Model {
  requestId?: string;
  size?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayTenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengTestGrayTenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengTestGrayTenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayThirdRequest extends $tea.Model {
  home?: HuichengTestGrayThirdRequestHome;
  static names(): { [key: string]: string } {
    return {
      home: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      home: HuichengTestGrayThirdRequestHome,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayThirdShrinkRequest extends $tea.Model {
  homeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      homeShrink: 'Home',
    };
  }

  static types(): { [key: string]: any } {
    return {
      homeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayThirdResponseBody extends $tea.Model {
  requestId?: string;
  size?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      size: 'Size',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      size: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayThirdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengTestGrayThirdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengTestGrayThirdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestResourceOwnerIdResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestResourceOwnerIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengTestResourceOwnerIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengTestResourceOwnerIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengetRequest extends $tea.Model {
  add?: string;
  address?: string;
  apple?: string;
  blue?: string;
  code?: string;
  enight?: string;
  five?: string;
  four?: string;
  hello?: string;
  hold?: string;
  jack?: string;
  list?: string;
  mack?: string;
  new1?: string;
  newName?: string;
  news?: string;
  nigh?: string;
  now?: string;
  params?: string;
  params1?: string;
  params2?: string;
  params3?: string;
  params4?: string;
  red?: string;
  rong?: string;
  six?: string;
  tea?: string;
  ten?: string;
  three?: string;
  two?: string;
  visity?: string;
  white?: string;
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
      address: 'Address',
      apple: 'Apple',
      blue: 'Blue',
      code: 'Code',
      enight: 'Enight',
      five: 'Five',
      four: 'Four',
      hello: 'Hello',
      hold: 'Hold',
      jack: 'Jack',
      list: 'List',
      mack: 'Mack',
      new1: 'New1',
      newName: 'NewName',
      news: 'News',
      nigh: 'Nigh',
      now: 'Now',
      params: 'Params',
      params1: 'Params1',
      params2: 'Params2',
      params3: 'Params3',
      params4: 'Params4',
      red: 'Red',
      rong: 'Rong',
      six: 'Six',
      tea: 'Tea',
      ten: 'Ten',
      three: 'Three',
      two: 'Two',
      visity: 'Visity',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: 'string',
      address: 'string',
      apple: 'string',
      blue: 'string',
      code: 'string',
      enight: 'string',
      five: 'string',
      four: 'string',
      hello: 'string',
      hold: 'string',
      jack: 'string',
      list: 'string',
      mack: 'string',
      new1: 'string',
      newName: 'string',
      news: 'string',
      nigh: 'string',
      now: 'string',
      params: 'string',
      params1: 'string',
      params2: 'string',
      params3: 'string',
      params4: 'string',
      red: 'string',
      rong: 'string',
      six: 'string',
      tea: 'string',
      ten: 'string',
      three: 'string',
      two: 'string',
      visity: 'string',
      white: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengetResponseBody extends $tea.Model {
  age?: string;
  apple?: string;
  blue?: string;
  code?: string;
  even?: string;
  five?: string;
  instanceId4?: string;
  message?: string;
  night?: string;
  requestId?: string;
  seven?: string;
  six?: string;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      apple: 'Apple',
      blue: 'Blue',
      code: 'Code',
      even: 'Even',
      five: 'Five',
      instanceId4: 'InstanceId4',
      message: 'Message',
      night: 'Night',
      requestId: 'RequestId',
      seven: 'Seven',
      six: 'Six',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'string',
      apple: 'string',
      blue: 'string',
      code: 'string',
      even: 'string',
      five: 'string',
      instanceId4: 'string',
      message: 'string',
      night: 'string',
      requestId: 'string',
      seven: 'string',
      six: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengetestResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengetestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HuichengetestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HuichengetestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HomeDMapValue extends $tea.Model {
  detail?: string;
  location?: HomeDMapValueLocation;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: HomeDMapValueLocation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestHomeAddressLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestHomeAddressT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestHomeAddress extends $tea.Model {
  detail?: string;
  location?: CreateRulesRequestHomeAddressLocation;
  t?: CreateRulesRequestHomeAddressT;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: CreateRulesRequestHomeAddressLocation,
      t: CreateRulesRequestHomeAddressT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestHomeLocations extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestHomeT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestHome extends $tea.Model {
  address?: CreateRulesRequestHomeAddress;
  DMap?: { [key: string]: HomeDMapValue };
  locations?: CreateRulesRequestHomeLocations[];
  nameToAge?: { [key: string]: number };
  phoneNumbers?: string[];
  t?: CreateRulesRequestHomeT;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      DMap: 'DMap',
      locations: 'Locations',
      nameToAge: 'NameToAge',
      phoneNumbers: 'PhoneNumbers',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: CreateRulesRequestHomeAddress,
      DMap: { 'type': 'map', 'keyType': 'string', 'valueType': HomeDMapValue },
      locations: { 'type': 'array', 'itemType': CreateRulesRequestHomeLocations },
      nameToAge: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      t: CreateRulesRequestHomeT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayRequestHomeAddressLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayRequestHomeAddressT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayRequestHomeAddress extends $tea.Model {
  detail?: string;
  location?: HuichengTestGrayRequestHomeAddressLocation;
  t?: HuichengTestGrayRequestHomeAddressT;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: HuichengTestGrayRequestHomeAddressLocation,
      t: HuichengTestGrayRequestHomeAddressT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayRequestHomeLocations extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayRequestHomeT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayRequestHome extends $tea.Model {
  address?: HuichengTestGrayRequestHomeAddress;
  DMap?: { [key: string]: HomeDMapValue };
  locations?: HuichengTestGrayRequestHomeLocations[];
  nameToAge?: { [key: string]: number };
  phoneNumbers?: string[];
  t?: HuichengTestGrayRequestHomeT;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      DMap: 'DMap',
      locations: 'Locations',
      nameToAge: 'NameToAge',
      phoneNumbers: 'PhoneNumbers',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: HuichengTestGrayRequestHomeAddress,
      DMap: { 'type': 'map', 'keyType': 'string', 'valueType': HomeDMapValue },
      locations: { 'type': 'array', 'itemType': HuichengTestGrayRequestHomeLocations },
      nameToAge: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      t: HuichengTestGrayRequestHomeT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayEightRequestHomeAddressLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayEightRequestHomeAddressT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayEightRequestHomeAddress extends $tea.Model {
  detail?: string;
  location?: HuichengTestGrayEightRequestHomeAddressLocation;
  t?: HuichengTestGrayEightRequestHomeAddressT;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: HuichengTestGrayEightRequestHomeAddressLocation,
      t: HuichengTestGrayEightRequestHomeAddressT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayEightRequestHomeLocations extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayEightRequestHomeT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayEightRequestHome extends $tea.Model {
  address?: HuichengTestGrayEightRequestHomeAddress;
  DMap?: { [key: string]: HomeDMapValue };
  locations?: HuichengTestGrayEightRequestHomeLocations[];
  nameToAge?: { [key: string]: number };
  phoneNumbers?: string[];
  t?: HuichengTestGrayEightRequestHomeT;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      DMap: 'DMap',
      locations: 'Locations',
      nameToAge: 'NameToAge',
      phoneNumbers: 'PhoneNumbers',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: HuichengTestGrayEightRequestHomeAddress,
      DMap: { 'type': 'map', 'keyType': 'string', 'valueType': HomeDMapValue },
      locations: { 'type': 'array', 'itemType': HuichengTestGrayEightRequestHomeLocations },
      nameToAge: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      t: HuichengTestGrayEightRequestHomeT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayFifthRequestHomeAddressLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayFifthRequestHomeAddressT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayFifthRequestHomeAddress extends $tea.Model {
  detail?: string;
  location?: HuichengTestGrayFifthRequestHomeAddressLocation;
  t?: HuichengTestGrayFifthRequestHomeAddressT;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: HuichengTestGrayFifthRequestHomeAddressLocation,
      t: HuichengTestGrayFifthRequestHomeAddressT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayFifthRequestHomeLocations extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayFifthRequestHomeT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayFifthRequestHome extends $tea.Model {
  address?: HuichengTestGrayFifthRequestHomeAddress;
  DMap?: { [key: string]: HomeDMapValue };
  locations?: HuichengTestGrayFifthRequestHomeLocations[];
  nameToAge?: { [key: string]: number };
  phoneNumbers?: string[];
  t?: HuichengTestGrayFifthRequestHomeT;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      DMap: 'DMap',
      locations: 'Locations',
      nameToAge: 'NameToAge',
      phoneNumbers: 'PhoneNumbers',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: HuichengTestGrayFifthRequestHomeAddress,
      DMap: { 'type': 'map', 'keyType': 'string', 'valueType': HomeDMapValue },
      locations: { 'type': 'array', 'itemType': HuichengTestGrayFifthRequestHomeLocations },
      nameToAge: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      t: HuichengTestGrayFifthRequestHomeT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayNineRequestHomeAddressLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayNineRequestHomeAddressT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayNineRequestHomeAddress extends $tea.Model {
  detail?: string;
  location?: HuichengTestGrayNineRequestHomeAddressLocation;
  t?: HuichengTestGrayNineRequestHomeAddressT;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: HuichengTestGrayNineRequestHomeAddressLocation,
      t: HuichengTestGrayNineRequestHomeAddressT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayNineRequestHomeLocations extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayNineRequestHomeT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayNineRequestHome extends $tea.Model {
  address?: HuichengTestGrayNineRequestHomeAddress;
  DMap?: { [key: string]: HomeDMapValue };
  locations?: HuichengTestGrayNineRequestHomeLocations[];
  nameToAge?: { [key: string]: number };
  phoneNumbers?: string[];
  t?: HuichengTestGrayNineRequestHomeT;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      DMap: 'DMap',
      locations: 'Locations',
      nameToAge: 'NameToAge',
      phoneNumbers: 'PhoneNumbers',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: HuichengTestGrayNineRequestHomeAddress,
      DMap: { 'type': 'map', 'keyType': 'string', 'valueType': HomeDMapValue },
      locations: { 'type': 'array', 'itemType': HuichengTestGrayNineRequestHomeLocations },
      nameToAge: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      t: HuichengTestGrayNineRequestHomeT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySecondRequestHomeAddressLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySecondRequestHomeAddressT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySecondRequestHomeAddress extends $tea.Model {
  detail?: string;
  location?: HuichengTestGraySecondRequestHomeAddressLocation;
  t?: HuichengTestGraySecondRequestHomeAddressT;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: HuichengTestGraySecondRequestHomeAddressLocation,
      t: HuichengTestGraySecondRequestHomeAddressT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySecondRequestHomeLocations extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySecondRequestHomeT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySecondRequestHome extends $tea.Model {
  address?: HuichengTestGraySecondRequestHomeAddress;
  DMap?: { [key: string]: HomeDMapValue };
  locations?: HuichengTestGraySecondRequestHomeLocations[];
  nameToAge?: { [key: string]: number };
  phoneNumbers?: string[];
  t?: HuichengTestGraySecondRequestHomeT;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      DMap: 'DMap',
      locations: 'Locations',
      nameToAge: 'NameToAge',
      phoneNumbers: 'PhoneNumbers',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: HuichengTestGraySecondRequestHomeAddress,
      DMap: { 'type': 'map', 'keyType': 'string', 'valueType': HomeDMapValue },
      locations: { 'type': 'array', 'itemType': HuichengTestGraySecondRequestHomeLocations },
      nameToAge: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      t: HuichengTestGraySecondRequestHomeT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySevenRequestHomeAddressLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySevenRequestHomeAddressT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySevenRequestHomeAddress extends $tea.Model {
  detail?: string;
  location?: HuichengTestGraySevenRequestHomeAddressLocation;
  t?: HuichengTestGraySevenRequestHomeAddressT;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: HuichengTestGraySevenRequestHomeAddressLocation,
      t: HuichengTestGraySevenRequestHomeAddressT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySevenRequestHomeLocations extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySevenRequestHomeT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySevenRequestHome extends $tea.Model {
  address?: HuichengTestGraySevenRequestHomeAddress;
  DMap?: { [key: string]: HomeDMapValue };
  locations?: HuichengTestGraySevenRequestHomeLocations[];
  nameToAge?: { [key: string]: number };
  phoneNumbers?: string[];
  t?: HuichengTestGraySevenRequestHomeT;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      DMap: 'DMap',
      locations: 'Locations',
      nameToAge: 'NameToAge',
      phoneNumbers: 'PhoneNumbers',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: HuichengTestGraySevenRequestHomeAddress,
      DMap: { 'type': 'map', 'keyType': 'string', 'valueType': HomeDMapValue },
      locations: { 'type': 'array', 'itemType': HuichengTestGraySevenRequestHomeLocations },
      nameToAge: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      t: HuichengTestGraySevenRequestHomeT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySixRequestHomeAddressLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySixRequestHomeAddressT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySixRequestHomeAddress extends $tea.Model {
  detail?: string;
  location?: HuichengTestGraySixRequestHomeAddressLocation;
  t?: HuichengTestGraySixRequestHomeAddressT;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: HuichengTestGraySixRequestHomeAddressLocation,
      t: HuichengTestGraySixRequestHomeAddressT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySixRequestHomeLocations extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySixRequestHomeT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGraySixRequestHome extends $tea.Model {
  address?: HuichengTestGraySixRequestHomeAddress;
  DMap?: { [key: string]: HomeDMapValue };
  locations?: HuichengTestGraySixRequestHomeLocations[];
  nameToAge?: { [key: string]: number };
  phoneNumbers?: string[];
  t?: HuichengTestGraySixRequestHomeT;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      DMap: 'DMap',
      locations: 'Locations',
      nameToAge: 'NameToAge',
      phoneNumbers: 'PhoneNumbers',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: HuichengTestGraySixRequestHomeAddress,
      DMap: { 'type': 'map', 'keyType': 'string', 'valueType': HomeDMapValue },
      locations: { 'type': 'array', 'itemType': HuichengTestGraySixRequestHomeLocations },
      nameToAge: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      t: HuichengTestGraySixRequestHomeT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayTenRequestHomeAddressLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayTenRequestHomeAddressT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayTenRequestHomeAddress extends $tea.Model {
  detail?: string;
  location?: HuichengTestGrayTenRequestHomeAddressLocation;
  t?: HuichengTestGrayTenRequestHomeAddressT;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: HuichengTestGrayTenRequestHomeAddressLocation,
      t: HuichengTestGrayTenRequestHomeAddressT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayTenRequestHomeLocations extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayTenRequestHomeT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayTenRequestHome extends $tea.Model {
  address?: HuichengTestGrayTenRequestHomeAddress;
  DMap?: { [key: string]: HomeDMapValue };
  locations?: HuichengTestGrayTenRequestHomeLocations[];
  nameToAge?: { [key: string]: number };
  phoneNumbers?: string[];
  t?: HuichengTestGrayTenRequestHomeT;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      DMap: 'DMap',
      locations: 'Locations',
      nameToAge: 'NameToAge',
      phoneNumbers: 'PhoneNumbers',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: HuichengTestGrayTenRequestHomeAddress,
      DMap: { 'type': 'map', 'keyType': 'string', 'valueType': HomeDMapValue },
      locations: { 'type': 'array', 'itemType': HuichengTestGrayTenRequestHomeLocations },
      nameToAge: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      t: HuichengTestGrayTenRequestHomeT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayThirdRequestHomeAddressLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayThirdRequestHomeAddressT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayThirdRequestHomeAddress extends $tea.Model {
  detail?: string;
  location?: HuichengTestGrayThirdRequestHomeAddressLocation;
  t?: HuichengTestGrayThirdRequestHomeAddressT;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      location: 'Location',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      location: HuichengTestGrayThirdRequestHomeAddressLocation,
      t: HuichengTestGrayThirdRequestHomeAddressT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayThirdRequestHomeLocations extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayThirdRequestHomeT extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HuichengTestGrayThirdRequestHome extends $tea.Model {
  address?: HuichengTestGrayThirdRequestHomeAddress;
  DMap?: { [key: string]: HomeDMapValue };
  locations?: HuichengTestGrayThirdRequestHomeLocations[];
  nameToAge?: { [key: string]: number };
  phoneNumbers?: string[];
  t?: HuichengTestGrayThirdRequestHomeT;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      DMap: 'DMap',
      locations: 'Locations',
      nameToAge: 'NameToAge',
      phoneNumbers: 'PhoneNumbers',
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: HuichengTestGrayThirdRequestHomeAddress,
      DMap: { 'type': 'map', 'keyType': 'string', 'valueType': HomeDMapValue },
      locations: { 'type': 'array', 'itemType': HuichengTestGrayThirdRequestHomeLocations },
      nameToAge: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      t: HuichengTestGrayThirdRequestHomeT,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HomeDMapValueLocation extends $tea.Model {
  late?: number;
  lon?: number;
  static names(): { [key: string]: string } {
    return {
      late: 'Late',
      lon: 'Lon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      late: 'number',
      lon: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("amptest", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async createRulesWithOptions(tmpReq: CreateRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateRulesResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.home))) {
      request.homeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.home), "Home", "json");
    }

    let query = { };
    if (!Util.isUnset(request.homeShrink)) {
      query["Home"] = request.homeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRules",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRulesResponse>(await this.callApi(params, req, runtime), new CreateRulesResponse({}));
  }

  async createRules(request: CreateRulesRequest): Promise<CreateRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRulesWithOptions(request, runtime);
  }

  async huichengTestGrayWithOptions(tmpReq: HuichengTestGrayRequest, runtime: $Util.RuntimeOptions): Promise<HuichengTestGrayResponse> {
    Util.validateModel(tmpReq);
    let request = new HuichengTestGrayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.home))) {
      request.homeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.home), "Home", "json");
    }

    let query = { };
    if (!Util.isUnset(request.homeShrink)) {
      query["Home"] = request.homeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HuichengTestGray",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengTestGrayResponse>(await this.callApi(params, req, runtime), new HuichengTestGrayResponse({}));
  }

  async huichengTestGray(request: HuichengTestGrayRequest): Promise<HuichengTestGrayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengTestGrayWithOptions(request, runtime);
  }

  async huichengTestGrayEightWithOptions(tmpReq: HuichengTestGrayEightRequest, runtime: $Util.RuntimeOptions): Promise<HuichengTestGrayEightResponse> {
    Util.validateModel(tmpReq);
    let request = new HuichengTestGrayEightShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.home))) {
      request.homeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.home), "Home", "json");
    }

    let query = { };
    if (!Util.isUnset(request.homeShrink)) {
      query["Home"] = request.homeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HuichengTestGrayEight",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengTestGrayEightResponse>(await this.callApi(params, req, runtime), new HuichengTestGrayEightResponse({}));
  }

  async huichengTestGrayEight(request: HuichengTestGrayEightRequest): Promise<HuichengTestGrayEightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengTestGrayEightWithOptions(request, runtime);
  }

  async huichengTestGrayFifthWithOptions(tmpReq: HuichengTestGrayFifthRequest, runtime: $Util.RuntimeOptions): Promise<HuichengTestGrayFifthResponse> {
    Util.validateModel(tmpReq);
    let request = new HuichengTestGrayFifthShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.home))) {
      request.homeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.home), "Home", "json");
    }

    let query = { };
    if (!Util.isUnset(request.homeShrink)) {
      query["Home"] = request.homeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HuichengTestGrayFifth",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengTestGrayFifthResponse>(await this.callApi(params, req, runtime), new HuichengTestGrayFifthResponse({}));
  }

  async huichengTestGrayFifth(request: HuichengTestGrayFifthRequest): Promise<HuichengTestGrayFifthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengTestGrayFifthWithOptions(request, runtime);
  }

  async huichengTestGrayNineWithOptions(tmpReq: HuichengTestGrayNineRequest, runtime: $Util.RuntimeOptions): Promise<HuichengTestGrayNineResponse> {
    Util.validateModel(tmpReq);
    let request = new HuichengTestGrayNineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.home))) {
      request.homeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.home), "Home", "json");
    }

    let query = { };
    if (!Util.isUnset(request.homeShrink)) {
      query["Home"] = request.homeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HuichengTestGrayNine",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengTestGrayNineResponse>(await this.callApi(params, req, runtime), new HuichengTestGrayNineResponse({}));
  }

  async huichengTestGrayNine(request: HuichengTestGrayNineRequest): Promise<HuichengTestGrayNineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengTestGrayNineWithOptions(request, runtime);
  }

  async huichengTestGraySecondWithOptions(tmpReq: HuichengTestGraySecondRequest, runtime: $Util.RuntimeOptions): Promise<HuichengTestGraySecondResponse> {
    Util.validateModel(tmpReq);
    let request = new HuichengTestGraySecondShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.home))) {
      request.homeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.home), "Home", "json");
    }

    let query = { };
    if (!Util.isUnset(request.homeShrink)) {
      query["Home"] = request.homeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HuichengTestGraySecond",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengTestGraySecondResponse>(await this.callApi(params, req, runtime), new HuichengTestGraySecondResponse({}));
  }

  async huichengTestGraySecond(request: HuichengTestGraySecondRequest): Promise<HuichengTestGraySecondResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengTestGraySecondWithOptions(request, runtime);
  }

  async huichengTestGraySevenWithOptions(tmpReq: HuichengTestGraySevenRequest, runtime: $Util.RuntimeOptions): Promise<HuichengTestGraySevenResponse> {
    Util.validateModel(tmpReq);
    let request = new HuichengTestGraySevenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.home))) {
      request.homeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.home), "Home", "json");
    }

    let query = { };
    if (!Util.isUnset(request.homeShrink)) {
      query["Home"] = request.homeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HuichengTestGraySeven",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengTestGraySevenResponse>(await this.callApi(params, req, runtime), new HuichengTestGraySevenResponse({}));
  }

  async huichengTestGraySeven(request: HuichengTestGraySevenRequest): Promise<HuichengTestGraySevenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengTestGraySevenWithOptions(request, runtime);
  }

  async huichengTestGraySixWithOptions(tmpReq: HuichengTestGraySixRequest, runtime: $Util.RuntimeOptions): Promise<HuichengTestGraySixResponse> {
    Util.validateModel(tmpReq);
    let request = new HuichengTestGraySixShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.home))) {
      request.homeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.home), "Home", "json");
    }

    let query = { };
    if (!Util.isUnset(request.homeShrink)) {
      query["Home"] = request.homeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HuichengTestGraySix",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengTestGraySixResponse>(await this.callApi(params, req, runtime), new HuichengTestGraySixResponse({}));
  }

  async huichengTestGraySix(request: HuichengTestGraySixRequest): Promise<HuichengTestGraySixResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengTestGraySixWithOptions(request, runtime);
  }

  async huichengTestGrayTenWithOptions(tmpReq: HuichengTestGrayTenRequest, runtime: $Util.RuntimeOptions): Promise<HuichengTestGrayTenResponse> {
    Util.validateModel(tmpReq);
    let request = new HuichengTestGrayTenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.home))) {
      request.homeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.home), "Home", "json");
    }

    let query = { };
    if (!Util.isUnset(request.homeShrink)) {
      query["Home"] = request.homeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HuichengTestGrayTen",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengTestGrayTenResponse>(await this.callApi(params, req, runtime), new HuichengTestGrayTenResponse({}));
  }

  async huichengTestGrayTen(request: HuichengTestGrayTenRequest): Promise<HuichengTestGrayTenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengTestGrayTenWithOptions(request, runtime);
  }

  async huichengTestGrayThirdWithOptions(tmpReq: HuichengTestGrayThirdRequest, runtime: $Util.RuntimeOptions): Promise<HuichengTestGrayThirdResponse> {
    Util.validateModel(tmpReq);
    let request = new HuichengTestGrayThirdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.home))) {
      request.homeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.home), "Home", "json");
    }

    let query = { };
    if (!Util.isUnset(request.homeShrink)) {
      query["Home"] = request.homeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HuichengTestGrayThird",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengTestGrayThirdResponse>(await this.callApi(params, req, runtime), new HuichengTestGrayThirdResponse({}));
  }

  async huichengTestGrayThird(request: HuichengTestGrayThirdRequest): Promise<HuichengTestGrayThirdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengTestGrayThirdWithOptions(request, runtime);
  }

  async huichengTestResourceOwnerIdWithOptions(runtime: $Util.RuntimeOptions): Promise<HuichengTestResourceOwnerIdResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "HuichengTestResourceOwnerId",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengTestResourceOwnerIdResponse>(await this.callApi(params, req, runtime), new HuichengTestResourceOwnerIdResponse({}));
  }

  async huichengTestResourceOwnerId(): Promise<HuichengTestResourceOwnerIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengTestResourceOwnerIdWithOptions(runtime);
  }

  async huichengetWithOptions(request: HuichengetRequest, runtime: $Util.RuntimeOptions): Promise<HuichengetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.add)) {
      query["Add"] = request.add;
    }

    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.apple)) {
      query["Apple"] = request.apple;
    }

    if (!Util.isUnset(request.blue)) {
      query["Blue"] = request.blue;
    }

    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.enight)) {
      query["Enight"] = request.enight;
    }

    if (!Util.isUnset(request.five)) {
      query["Five"] = request.five;
    }

    if (!Util.isUnset(request.four)) {
      query["Four"] = request.four;
    }

    if (!Util.isUnset(request.hello)) {
      query["Hello"] = request.hello;
    }

    if (!Util.isUnset(request.hold)) {
      query["Hold"] = request.hold;
    }

    if (!Util.isUnset(request.jack)) {
      query["Jack"] = request.jack;
    }

    if (!Util.isUnset(request.list)) {
      query["List"] = request.list;
    }

    if (!Util.isUnset(request.mack)) {
      query["Mack"] = request.mack;
    }

    if (!Util.isUnset(request.new1)) {
      query["New1"] = request.new1;
    }

    if (!Util.isUnset(request.newName)) {
      query["NewName"] = request.newName;
    }

    if (!Util.isUnset(request.news)) {
      query["News"] = request.news;
    }

    if (!Util.isUnset(request.nigh)) {
      query["Nigh"] = request.nigh;
    }

    if (!Util.isUnset(request.now)) {
      query["Now"] = request.now;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.params1)) {
      query["Params1"] = request.params1;
    }

    if (!Util.isUnset(request.params2)) {
      query["Params2"] = request.params2;
    }

    if (!Util.isUnset(request.params3)) {
      query["Params3"] = request.params3;
    }

    if (!Util.isUnset(request.params4)) {
      query["Params4"] = request.params4;
    }

    if (!Util.isUnset(request.red)) {
      query["Red"] = request.red;
    }

    if (!Util.isUnset(request.rong)) {
      query["Rong"] = request.rong;
    }

    if (!Util.isUnset(request.six)) {
      query["Six"] = request.six;
    }

    if (!Util.isUnset(request.tea)) {
      query["Tea"] = request.tea;
    }

    if (!Util.isUnset(request.ten)) {
      query["Ten"] = request.ten;
    }

    if (!Util.isUnset(request.three)) {
      query["Three"] = request.three;
    }

    if (!Util.isUnset(request.two)) {
      query["Two"] = request.two;
    }

    if (!Util.isUnset(request.visity)) {
      query["Visity"] = request.visity;
    }

    if (!Util.isUnset(request.white)) {
      query["White"] = request.white;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Huichenget",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengetResponse>(await this.callApi(params, req, runtime), new HuichengetResponse({}));
  }

  async huichenget(request: HuichengetRequest): Promise<HuichengetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengetWithOptions(request, runtime);
  }

  async huichengetestWithOptions(runtime: $Util.RuntimeOptions): Promise<HuichengetestResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "Huichengetest",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HuichengetestResponse>(await this.callApi(params, req, runtime), new HuichengetestResponse({}));
  }

  async huichengetest(): Promise<HuichengetestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.huichengetestWithOptions(runtime);
  }

}
