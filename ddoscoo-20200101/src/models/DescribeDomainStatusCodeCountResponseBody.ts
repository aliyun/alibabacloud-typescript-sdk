// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatusCodeCountResponseBody extends $dara.Model {
  requestId?: string;
  status200?: number;
  status2XX?: number;
  status3XX?: number;
  status403?: number;
  status404?: number;
  status405?: number;
  status410?: number;
  status499?: number;
  status4XX?: number;
  status501?: number;
  status502?: number;
  status503?: number;
  status504?: number;
  status5XX?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status200: 'Status200',
      status2XX: 'Status2XX',
      status3XX: 'Status3XX',
      status403: 'Status403',
      status404: 'Status404',
      status405: 'Status405',
      status410: 'Status410',
      status499: 'Status499',
      status4XX: 'Status4XX',
      status501: 'Status501',
      status502: 'Status502',
      status503: 'Status503',
      status504: 'Status504',
      status5XX: 'Status5XX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status200: 'number',
      status2XX: 'number',
      status3XX: 'number',
      status403: 'number',
      status404: 'number',
      status405: 'number',
      status410: 'number',
      status499: 'number',
      status4XX: 'number',
      status501: 'number',
      status502: 'number',
      status503: 'number',
      status504: 'number',
      status5XX: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

