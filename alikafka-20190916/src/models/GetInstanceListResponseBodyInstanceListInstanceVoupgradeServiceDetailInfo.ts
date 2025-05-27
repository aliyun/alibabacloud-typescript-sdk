// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceListResponseBodyInstanceListInstanceVOUpgradeServiceDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The open source Apache Kafka version that corresponds to the instance.
   * 
   * @example
   * 2.2.0
   */
  current2OpenSourceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      current2OpenSourceVersion: 'Current2OpenSourceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current2OpenSourceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

