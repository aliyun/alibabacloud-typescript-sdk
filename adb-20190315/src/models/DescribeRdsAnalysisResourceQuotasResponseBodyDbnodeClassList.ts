// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassListDBNodeClass } from "./DescribeRdsAnalysisResourceQuotasResponseBodyDbnodeClassListDbnodeClass";


export class DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassList extends $dara.Model {
  DBNodeClass?: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassListDBNodeClass[];
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassListDBNodeClass },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeClass)) {
      $dara.Model.validateArray(this.DBNodeClass);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

