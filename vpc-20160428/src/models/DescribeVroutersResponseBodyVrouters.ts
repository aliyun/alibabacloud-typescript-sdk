// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVRoutersResponseBodyVRoutersVRouter } from "./DescribeVroutersResponseBodyVroutersVrouter";


export class DescribeVRoutersResponseBodyVRouters extends $dara.Model {
  VRouter?: DescribeVRoutersResponseBodyVRoutersVRouter[];
  static names(): { [key: string]: string } {
    return {
      VRouter: 'VRouter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VRouter: { 'type': 'array', 'itemType': DescribeVRoutersResponseBodyVRoutersVRouter },
    };
  }

  validate() {
    if(Array.isArray(this.VRouter)) {
      $dara.Model.validateArray(this.VRouter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

