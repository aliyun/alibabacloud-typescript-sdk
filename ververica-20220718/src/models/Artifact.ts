// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CdcYamlArtifact } from "./CdcYamlArtifact";
import { JarArtifact } from "./JarArtifact";
import { PythonArtifact } from "./PythonArtifact";
import { SqlArtifact } from "./SqlArtifact";


export class Artifact extends $dara.Model {
  /**
   * @remarks
   * Required for a data ingestion job.
   */
  cdcYamlArtifact?: CdcYamlArtifact;
  /**
   * @remarks
   * Required for a JAR job.
   */
  jarArtifact?: JarArtifact;
  /**
   * @remarks
   * Specifies the kind of job. This field is required and cannot be changed after creation.
   * 
   * - SQLSCRIPT: An SQL job.
   * 
   * - JAR: A JAR job.
   * 
   * - PYTHON: A Python job.
   * 
   * - CDCYAML: A CDC data ingestion job.
   * 
   * @example
   * SQLSCRIPT
   */
  kind?: string;
  /**
   * @remarks
   * Required for a Python job.
   */
  pythonArtifact?: PythonArtifact;
  /**
   * @remarks
   * Required for an SQL job.
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

