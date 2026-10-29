// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The edge application template in JSON format. It contains the following information:
   * 
   * - Basic information such as the application name.
   * - Resource specifications and network security configurations.
   * - Business configurations.
   * - Resource requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"appMetaData\\":{        \\"appName\\":\\"nginx\\",        \\"clusterName\\":\\"poc\\",        \\"appType\\":\\"Common\\",        \\"description\\":\\" test service\\"    },    \\"resourceAttribute\\":{        \\"resourceType\\":\\"\\",        \\"instanceSpec\\":\\"ens.sn1.tiny\\",        \\"systemDiskSize\\":20,        \\"dataDiskSize\\":0,        \\"bandwithOut\\":10,        \\"areaLevel\\":\\"National\\",        \\"netSecurityStrategy\\":null,        \\"initConfig\\":null    },    \\"resourceSelector\\":[        {            \\"count\\":1        }    ],    \\"workload\\":[        {            \\"podCount\\":1,            \\"serviceConfig\\":null,            \\"name\\":\\"nginx\\",            \\"podSpec\\":{                \\"containers\\":[                    {                        \\"name\\":\\"android\\",                        \\"image\\":\\"edge-registry.alicdn.com/test/nginx\\"                    }                ]            },            \\"count\\":1        }    ]}
   */
  template?: string;
  /**
   * @remarks
   * The timeout period for asynchronous processing. Unit: seconds. Default value: 1800.
   * 
   * @example
   * 1800
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

