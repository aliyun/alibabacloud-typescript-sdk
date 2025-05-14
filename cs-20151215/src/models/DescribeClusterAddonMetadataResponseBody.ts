// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAddonMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The component schema parameters.
   * 
   * @example
   * {\\n  \\"$schema\\": \\"https://json-schema.org/draft-07/schema#\\",\\n  \\"properties\\": {\\n    \\"controller\\": {\\n      \\"description\\": \\"\\",\\n      \\"properties\\": {\\n        \\"resources\\": {\\n          \\"properties\\": {\\n            \\"armsPrometheusOperator\\": {\\n              \\"properties\\": {\\n                \\"resources\\": {\\n                  \\"properties\\": {\\n                    \\"limits\\": {\\n                      \\"properties\\": {\\n                        \\"memory\\": {\\n                          \\"description\\": \\"memory limit of arms prometheus operator\\",\\n                          \\"type\\": \\"string\\",\\n                          \\"pattern\\": \\"^[1-9][0-9]*(\\\\\\\\.\\\\\\\\d+)?(K|Ki|M|Mi|G|Gi|T|Ti)?$\\",\\n                          \\"default\\": \\"500m\\",\\n                          \\"x-ui-description\\": \\"<mds-key>\\",\\n                          \\"x-ui-prompt-message\\": \\"<mds-key>\\",\\n                          \\"x-ui-validation-message\\": \\"<mds-key>\\",\\n                          \\"x-ui-additional-tips\\": \\"<mds-key>\\"\\n                        },\\n                        \\"cpu\\": {\\n                          \\"description\\": \\"cpu limit of arms prometheus operator\\",\\n                          \\"type\\": \\"string\\",\\n                          \\"pattern\\": \\"^[1-9][0-9]*(m|\\\\\\\\.\\\\\\\\d+)?$\\",\\n                          \\"default\\": \\"1.0\\",\\n                          \\"x-ui-description\\": \\"<mds-key>\\",\\n                          \\"x-ui-validation-message\\": \\"<mds-key>\\"\\n                        }\\n                      },\\n                      \\"type\\": \\"object\\",\\n                      \\"additionalProperties\\": false\\n                    },\\n                    \\"requests\\": {\\n                      \\"properties\\": {\\n                        \\"memory\\": {\\n                          \\"description\\": \\"memory request of arms prometheus operator\\",\\n                          \\"type\\": \\"string\\",\\n                          \\"pattern\\": \\"^[1-9][0-9]*(\\\\\\\\.\\\\\\\\d+)?(K|Ki|M|Mi|G|Gi|T|Ti)?$\\",\\n                          \\"default\\": \\"500m\\",\\n                          \\"x-ui-description\\": \\"<mds-key>\\",\\n                          \\"x-ui-validation-message\\": \\"<mds-key>\\"\\n                        },\\n                        \\"cpu\\": {\\n                          \\"description\\": \\"cpu request of arms prometheus operator\\",\\n                          \\"type\\": \\"string\\",\\n                          \\"pattern\\": \\"^[1-9][0-9]*(m|\\\\\\\\.\\\\\\\\d+)?$\\",\\n                          \\"default\\": \\"1.0\\",\\n                          \\"x-ui-description\\": \\"<mds-key>\\",\\n                          \\"x-ui-validation-message\\": \\"<mds-key>\\"\\n                        }\\n                      },\\n                      \\"type\\": \\"object\\",\\n                      \\"additionalProperties\\": false\\n                    }\\n                  },\\n                  \\"type\\": \\"object\\",\\n                  \\"additionalProperties\\": false\\n                }\\n              },\\n              \\"type\\": \\"object\\",\\n              \\"additionalProperties\\": false\\n            }\\n          },\\n          \\"type\\": \\"object\\",\\n          \\"additionalProperties\\": false\\n        }\\n      },\\n      \\"type\\": \\"object\\",\\n      \\"additionalProperties\\": false\\n    }\\n  },\\n  \\"title\\": \\"Values\\",\\n  \\"type\\": \\"object\\",\\n  \\"additionalProperties\\": false\\n}
   */
  configSchema?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * coredns
   */
  name?: string;
  /**
   * @remarks
   * The component version.
   * 
   * @example
   * 1.8.4.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configSchema: 'config_schema',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configSchema: 'string',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

