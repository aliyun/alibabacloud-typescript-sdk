// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneDefenseObjectsResponseBodyObjects extends $dara.Model {
  domain?: string;
  policyId?: string;
  vip?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policyId: 'PolicyId',
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policyId: 'string',
      vip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDefenseObjectsResponseBody extends $dara.Model {
  objects?: DescribeSceneDefenseObjectsResponseBodyObjects[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      objects: 'Objects',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objects: { 'type': 'array', 'itemType': DescribeSceneDefenseObjectsResponseBodyObjects },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

