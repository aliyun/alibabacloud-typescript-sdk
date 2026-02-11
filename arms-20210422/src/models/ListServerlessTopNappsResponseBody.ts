// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerlessTopNAppsResponseBodyData extends $dara.Model {
  count?: number;
  error?: number;
  name?: string;
  pid?: string;
  region?: string;
  rt?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      error: 'Error',
      name: 'Name',
      pid: 'Pid',
      region: 'Region',
      rt: 'Rt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      error: 'number',
      name: 'string',
      pid: 'string',
      region: 'string',
      rt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerlessTopNAppsResponseBody extends $dara.Model {
  data?: ListServerlessTopNAppsResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListServerlessTopNAppsResponseBodyData },
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

