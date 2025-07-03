// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopology } from "./DescribeDbinstanceTopologyResponseBodyDataLogicInstanceTopology";


export class DescribeDBInstanceTopologyResponseBodyData extends $dara.Model {
  logicInstanceTopology?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopology;
  static names(): { [key: string]: string } {
    return {
      logicInstanceTopology: 'LogicInstanceTopology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicInstanceTopology: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopology,
    };
  }

  validate() {
    if(this.logicInstanceTopology && typeof (this.logicInstanceTopology as any).validate === 'function') {
      (this.logicInstanceTopology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

