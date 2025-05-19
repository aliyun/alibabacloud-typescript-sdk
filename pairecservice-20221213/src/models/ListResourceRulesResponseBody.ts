// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceRulesResponseBodyResourceRules } from "./ListResourceRulesResponseBodyResourceRules";


export class ListResourceRulesResponseBody extends $dara.Model {
  requestId?: string;
  resourceRules?: ListResourceRulesResponseBodyResourceRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRules: 'ResourceRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRules: { 'type': 'array', 'itemType': ListResourceRulesResponseBodyResourceRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceRules)) {
      $dara.Model.validateArray(this.resourceRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

