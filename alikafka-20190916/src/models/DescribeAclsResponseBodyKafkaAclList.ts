// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAclsResponseBodyKafkaAclListKafkaAclVO } from "./DescribeAclsResponseBodyKafkaAclListKafkaAclVo";


export class DescribeAclsResponseBodyKafkaAclList extends $dara.Model {
  kafkaAclVO?: DescribeAclsResponseBodyKafkaAclListKafkaAclVO[];
  static names(): { [key: string]: string } {
    return {
      kafkaAclVO: 'KafkaAclVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaAclVO: { 'type': 'array', 'itemType': DescribeAclsResponseBodyKafkaAclListKafkaAclVO },
    };
  }

  validate() {
    if(Array.isArray(this.kafkaAclVO)) {
      $dara.Model.validateArray(this.kafkaAclVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

