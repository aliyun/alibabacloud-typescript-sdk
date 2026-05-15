// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CdcYamlArtifact } from "./CdcYamlArtifact";
import { JarArtifact } from "./JarArtifact";
import { PythonArtifact } from "./PythonArtifact";
import { SqlArtifact } from "./SqlArtifact";


export class Artifact extends $dara.Model {
  cdcYamlArtifact?: CdcYamlArtifact;
  /**
   * @remarks
   * The information required for the SQL deployment.
   */
  jarArtifact?: JarArtifact;
  /**
   * @remarks
   * The type of the deployment. This parameter is required and cannot be modified after the deployment is created.
   * 
   * *   SQLSCRIPT
   * *   JAR
   * *   PYTHON
   * 
   * @example
   * SQLSCRIPT
   */
  kind?: string;
  /**
   * @remarks
   * The information required for the Python deployment.
   */
  pythonArtifact?: PythonArtifact;
  /**
   * @remarks
   * The information required for the JAR deployment.
   */
  sqlArtifact?: SqlArtifact;
  static names(): { [key: string]: string } {
    return {
      cdcYamlArtifact: 'cdcYamlArtifact',
      jarArtifact: 'jarArtifact',
      kind: 'kind',
      pythonArtifact: 'pythonArtifact',
      sqlArtifact: 'sqlArtifact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdcYamlArtifact: CdcYamlArtifact,
      jarArtifact: JarArtifact,
      kind: 'string',
      pythonArtifact: PythonArtifact,
      sqlArtifact: SqlArtifact,
    };
  }

  validate() {
    if(this.cdcYamlArtifact && typeof (this.cdcYamlArtifact as any).validate === 'function') {
      (this.cdcYamlArtifact as any).validate();
    }
    if(this.jarArtifact && typeof (this.jarArtifact as any).validate === 'function') {
      (this.jarArtifact as any).validate();
    }
    if(this.pythonArtifact && typeof (this.pythonArtifact as any).validate === 'function') {
      (this.pythonArtifact as any).validate();
    }
    if(this.sqlArtifact && typeof (this.sqlArtifact as any).validate === 'function') {
      (this.sqlArtifact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

