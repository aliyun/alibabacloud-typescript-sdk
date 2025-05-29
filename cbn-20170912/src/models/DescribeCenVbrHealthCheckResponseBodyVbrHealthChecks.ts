// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck } from "./DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck";


export class DescribeCenVbrHealthCheckResponseBodyVbrHealthChecks extends $dara.Model {
  vbrHealthCheck?: DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck[];
  static names(): { [key: string]: string } {
    return {
      vbrHealthCheck: 'VbrHealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vbrHealthCheck: { 'type': 'array', 'itemType': DescribeCenVbrHealthCheckResponseBodyVbrHealthChecksVbrHealthCheck },
    };
  }

  validate() {
    if(Array.isArray(this.vbrHealthCheck)) {
      $dara.Model.validateArray(this.vbrHealthCheck);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

